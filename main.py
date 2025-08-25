import random
import time
import card_pack
import tkinter as tk
from tkinter import ttk
import screeninfo # pip install
import pyttsx3 # pip install

class Cards():
	cards: list[str]
	
	def __init__(self, csv_lines: str):
		self.cards = csv_lines.split('\n')
		random.shuffle(self.cards)
			
	def draw(self, amount: int) -> list[str]:
		pick: list = []
		indexes: list[int] = sorted(random.sample(range(len(self.cards)), amount))
		for off_set, i in enumerate(indexes):
			pick.append(self.cards[i-off_set])
			self.cards.pop(i-off_set)
		
		return pick

class Player():
	def __init__(self, hand: list[str], index: int, name: str):
		self.hand: list[str] = hand
		self.name: str = name
		self.index: int = index
		self.score: int = 0
	
	def play(self, card: str) -> list[str, int]:
		for i,h in enumerate(self.hand):
			print(f'{i+1}: {h}')
			
		while True:
			if not (inp:= input(f'Select you best card {self.name} 1-{len(self.hand)}: ')).isnumeric():
				print('Input is not a number')
			else:
				inp: int = int(inp)-1
				if inp >= len(self.hand) or inp < 0:
					print('Number is out of range')
				else:
					break

		choice: str = self.hand[inp]
		self.hand.pop(inp)
		self.hand.append(card)
		return [choice, self.index]
	
	def add_score(self) -> None:
		self.score += 1

class Window():
	monitor: list[screeninfo.Monitor] = screeninfo.get_monitors()[0]
	screen_division: int = 5
	
	def __init__(self,
		window_name: str = __file__.strip('.py'),
		colour_bg: str = '#212121',
		colour_pri: str = 'green',
		colour_sec: str = 'navy',
		colour_err: str = 'red',
		colour_btn: str = None, 
		geo: str = f'800x500+{monitor.width // screen_division}+{monitor.height // screen_division}',
		x: int = 0,
		y: int = 0,
		full: bool = False,
		fnt: str = 'Neue Helvetica BQ'
	):
		self.colour_bg: str = colour_bg
		self.colour_error: str = colour_err
		self.colour_primary: str = colour_pri
		self.colour_secondary: str = colour_sec
		self.font: str = fnt
		self.cache: list[any] = []
		self.error_labels: list[any] = []
		self.colour_button: str = colour_btn or colour_pri
		self.root: tk.Tk = tk.Tk()
		
		if full:
			self.root.attributes('-fullscreen', True)
		else:
			self.root.geometry(geo)
			
		self.root.resizable(False, False)
		self.root.title(window_name)
		self.root.configure(bg=self.colour_bg)
		self.style: tk.ttk.Style = tk.ttk.Style(self.root)
		self.style.theme_use('classic')
		
	def header_text(self, string: str, change: bool = True) -> None:
		if change:
			string: str = self.stringer(string)
		question_label: tk.Label = tk.Label(
			self.root,
			text=string.title(),
			font=(self.font, 30),
			bg=self.colour_bg,
			foreground=self.colour_primary
		)
		question_label.pack(pady=10)
		
		self.root.update()
	
	def sub_text(self, string: str, change: bool = True) -> None:
		if change:
			string=self.stringer(string)

		player_name_label: tk.Label = tk.Label(
			self.root,
			text=string.capitalize(),
			font=(self.font,
			24),bg=self.colour_bg,
			foreground=self.colour_secondary
		)
		player_name_label.pack(pady=5)
		
		self.root.update()

	def selection_list(self, hand: list, player_index: int = 0, wideness: int = 45) -> None:
		chosen_card: tk.StringVar = tk.StringVar()
		combobox: tk.ttk.Combobox = tk.ttk.Combobox(
			self.root,
			textvariable=chosen_card,
			values=hand,
			state='readonly',
			font=(self.font,
			14),
			foreground=self.colour_primary,
			width=wideness
		)
		combobox.pack(pady=5)

		def handle_confirm_click() -> None:
			if chosen_card.get():
				self.cache.append(chosen_card.get())
				self.end()
			else:
				self.error_message()

		confirm_button: tk.Button = tk.Button(self.root,
			text='Confirm',
			command=handle_confirm_click,
			bg=self.colour_bg,
			fg=self.colour_button
		)
		confirm_button.pack(pady=5)

		self.root.update()

	def continue_button(self, text: str='continue') -> None:
		tk.Button(
			self.root,
			text=text.upper(),
			command=lambda: self.root.destroy(),
			bg=self.colour_bg,
			fg=self.colour_button,
			font=(self.font, 10)
		).pack(pady=5)

	def text_box(self, button_text: str = 'Submit_text', player_index: int = 0) -> None:
		def handle_text(text, player_index) -> None:
			if not text:
				self.error_message('type into box')
			else:
				self.cache.append(text)
				self.root.destroy()

		self.entry_var: tk.StringVar = tk.StringVar(self.root)
		self.entry_box: tk.Entry = tk.Entry(self.root,
			textvariable=self.entry_var,
			bg=self.colour_bg,
			fg=self.colour_button,
			font=(self.font, 14)
		)
		self.entry_box.pack(pady=5)
		self.entry_button: tk.Button = tk.Button(self.root,
			text=button_text,
			command=lambda: handle_text(self.entry_var.get(), self.entry_box),
			bg=self.colour_bg,
			fg=self.colour_button,
			font=(self.font, 10)
		)
		self.entry_button.pack(pady=5)

	def start(self) -> None:
		self.root.mainloop()
		
	def end(self) -> None:
		self.root.destroy()
	
	def error_message(self, message='Invalid, please select an option.') -> None:
		try:
			self.err_lab.destroy()
		except:
			pass
		self.err_lab: tk.Label = tk.Label(
			self.root,
			text=message.capitalize(),
			font=(self.font, 12),
			bg=self.colour_bg,
			foreground=self.colour_error
		).pack(pady=5)

	def stringer(self, string: str, char_limit: int = 43) -> None:
		if not string:
			return ''
		words: list[str] = string.split()
		lines: list = []
		current_line: str = ''
		for word in words:
			if len(current_line) + len(word) + 1 > char_limit:
				lines.append(current_line)
				current_line: str = ''
			current_line += word + ' '

		if current_line:
			lines.append(current_line.strip())
		return '\n'.join(lines)

class Game():
	def __init__(self):
		self.white_cards: Cards = Cards(card_pack.get_white_cards())
		self.black_cards: Cards = Cards(card_pack.get_black_cards())
		self.nouns: Cards = Cards(card_pack.get_nouns())
		self.prefs: Cards = Cards(card_pack.get_prefs())

		self.audio: bool = self.get_audio()

		self.number_of_players: int = self.get_number_of_players()

		self.players: list[Player] = [
			Player(self.white_cards.draw(5), i, self.get_name().title())
			for i in range(self.number_of_players)
		]
		
		self.card_reader: int  = random.randint(0, self.number_of_players)
		
	def get_name(self) -> str:
		while True:
			choice: Window = Window('Choose a name', colour_pri='yellow', colour_sec='yellow')
			choice.header_text('Pick a good name')
			choice.sub_text('Remember your name!!!', change=False)
			choice.selection_list(
				[
					f'{self.prefs.draw(1)[0]} {self.nouns.draw(1)[0]}'
					for _ in range(4)
				], 0, 19
			)
			choice.text_box('Have your custom name')
			choice.start()
			if choice.cache[0]:
				break
		return choice.cache[0]

	def text_to_speech(
		self,
		text: str,
		speed: int = 200,
		voice_id: str = random.choice(
			[
				'Microsoft Hazel Desktop - English (Great Britain)',
				'Microsoft David Desktop - English (United States)',
				'Microsoft Zira Desktop - English (United States)'
			]
		)
	) -> None:
		if not self.audio:
			return None

		engine: pyttsx3 = pyttsx3.init()
		engine.setProperty('rate', speed)
		
		voices = engine.getProperty('voices')
		selected_voice: None = None
		
		for vocal in voices:
			if voice_id.lower() in vocal.id.lower():
				selected_voice = vocal
				break

		if selected_voice:
			engine.setProperty('voice', selected_voice.id)
		
		engine.say(text)
		engine.runAndWait()
		engine.stop()

	def get_audio(self) -> bool:
		audio_window: Window = Window(window_name='Options', colour_pri='violet')  # Instantiate Window object
		audio_window.header_text('Audio?')
		audio_window.selection_list(['True', 'False'], 0, 5)
		audio_window.start()
		
		audio_check: str = audio_window.cache[0]
		audio: bool = None
		
		if audio_check == 'True':
			audio: bool = True
		else:
			audio: bool = False
		
		return audio

	def get_number_of_players(self) -> int:
		max_players: int = 11
		
		player_window: Window = Window(window_name='set players', colour_pri='orange')
		player_window.header_text('Select the number of players')
		player_window.selection_list(
			[
				i
				for i in range(
					3,
					max_players+1
				)
			],
			0,
			5,
		)
		player_window.start()
		
		number_of_players: int = int(player_window.cache[0])
		
		return number_of_players

	def display_scores(self) -> None:
		data_window = Window('scores', colour_pri='blue', colour_sec='blue')
		data_window.header_text('scores so far')
		data_window.sub_text(
			'\n'.join(
				[
					f'{player.name}: {player.score}'
					for player in self.players
				]
			), change=False
		)
		data_window.continue_button()
		data_window.start()

	def get_player_answer(self, player_index: int, question_card: str, count: int) -> str:
		player: Player = self.players[player_index]

		answer_window: Window = Window(f'take you pick {player.name}', colour_pri='silver', colour_sec='green')
		answer_window.header_text(
			self.format_question_card(question_card)
		)

		answer_window.sub_text(
			f'{player.name} pick your best card.\n({count+1}/{question_card.count('{}')})',
			change=False
		)

		answer_window.selection_list(player.hand, player.index)
		answer_window.start()

		for index, card in enumerate(player.hand):
			if answer_window.cache == card:
				player.hand[index] = self.white_cards.draw(1)[0]

		if answer_window.cache[0].lower() == '[Write your own card]'.lower():
			answer_window = Window(f'custom card {player.name}', colour_sec='cyan', colour_btn='cyan', colour_pri='silver')
			answer_window.header_text(question_card)
			answer_window.sub_text(f'write your own card {player.name},\n({count+1}/{question_card.count('{}')})', change=False)
			answer_window.text_box(button_text='submit custom card', player_index=player.index)
			answer_window.start()
		
		return answer_window.cache[0]

	def increment_card_reader(self) -> None:
		if self.card_reader + 1 < self.number_of_players:
			self.card_reader += 1
		else:
			self.card_reader = 0

	def format_question_card(self, question_card: str, fill_with: str = '______') -> str:
		return question_card.format(
			*[
				fill_with
				for _ in range(
					question_card.count('{}')
				)
			]
		)

	def get_answers_from_player(self, question_card: str) -> list[list[str, int]]:
		answers: list[list[str, int]] = []
		
		for player in self.players:
			if player.index == self.card_reader:
				continue 

			player_answers: list[str] = []

			for count in range(question_card.count('{}')):
				self.text_to_speech(player.name)

				selected_card =	self.get_player_answer(
					player.index,
					question_card,
					count
				)

				player_answers.append(selected_card)

				for index, player_card in enumerate(player.hand):
					if player_card == selected_card:
						player.hand.pop(index)
						break
					
			answers.append(
				[
					player_answers,
					player.index
				]
			)                    
			
			while len(player.hand) < 5:
				player.hand.append(
					self.white_cards.draw(1)[0]
				)

		return answers

	def get_winner_index(self, question_card: str, answers: list[list[str, int]]) -> int:
		for index, answer in enumerate(answers):
			string = f'{index+1}: {question_card.format(*[i for i in answer[0]])}'
			answer.append(string)
			self.text_to_speech(string)

		self.text_to_speech(self.players[self.card_reader].name)

		card_reader_window = Window('Read these in full', colour_pri='silver', colour_sec='indigo')
		card_reader_window.header_text(self.format_question_card(question_card))
		card_reader_window.sub_text(f'pick the best card {self.players[self.card_reader].name}')
		card_reader_window.selection_list(
			[
				' + '.join(answer[0])
				for answer in answers
			]
		)

		card_reader_window.start()

		chosen_answer: list[str] = card_reader_window.cache

		index: int = 0

		for answer in answers:
			if chosen_answer == answer[0]:
				index = answer[1]
				break
				
		return int(index)
	
	def display_winners(self) -> None:
		winners_window: Window = Window('Winners', colour_pri='gold')
		sorted_data: list[tuple[str, int]] = sorted(
			[
				(i.name, i.score)
				for i in self.players
			],
			key=lambda x: x[1],
			reverse=True
		)
		winners_window.header_text(
			'\n'.join([f'{name}: {score}' for name, score in sorted_data]),
			change=False
		)
		winners_window.start()

	def play_game(self) -> None:
		for round_number, question_card in enumerate(self.black_cards.cards):
			self.increment_card_reader()

			self.display_scores()
			
			self.text_to_speech(self.format_question_card(question_card, 'blank'))

			answers: list[list[str, int]] = self.get_answers_from_player(question_card)

			winner_index: int = self.get_winner_index(question_card, answers)
			
			self.players[winner_index].add_score()
		
		self.display_winners()

def main() -> None:
	game: Game = Game()
	game.play_game()

if __name__ == '__main__':
	main()


