import { Autocomplete, type Option } from "@/components/ui/autocomplete";
import { SmileIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

// ----------------------------------------------------------------------

const options: Option[] = [
	{ label: "12 Angry Men", value: "12 Angry Men" },
	{ label: "2001: A Space Odyssey", value: "2001: A Space Odyssey" },
	{ label: "A Beautiful Mind", value: "A Beautiful Mind" },
	{ label: "A Clockwork Orange", value: "A Clockwork Orange" },
	{ label: "A Quiet Place", value: "A Quiet Place" },
	{ label: "Disabled Movie", value: "Disabled Movie", disabled: true },
	{ label: "Alien", value: "Alien" },
	{ label: "Amélie", value: "Amélie" },
	{ label: "Apocalypse Now", value: "Apocalypse Now" },
	{ label: "Avatar", value: "Avatar" },
	{ label: "Avengers: Endgame", value: "Avengers: Endgame" },
	{ label: "Back to the Future", value: "Back to the Future" },
	{ label: "Black Panther", value: "Black Panther" },
	{ label: "Braveheart", value: "Braveheart" },
	{ label: "Casablanca", value: "Casablanca" },
	{ label: "City of God", value: "City of God" },
	{ label: "Django Unchained", value: "Django Unchained" },
	{ label: "Doctor Strange", value: "Doctor Strange" },
	{ label: "Donnie Darko", value: "Donnie Darko" },
	{ label: "Dune", value: "Dune" },
	{ label: "E.T. the Extra-Terrestrial", value: "E.T. the Extra-Terrestrial" },
	{ label: "Forrest Gump", value: "Forrest Gump" },
	{ label: "Frozen", value: "Frozen" },
	{ label: "Gladiator", value: "Gladiator" },
	{ label: "Gone Girl", value: "Gone Girl" },
	{ label: "Goodfellas", value: "Goodfellas" },
	{ label: "Gravity", value: "Gravity" },
	{ label: "Guardians of the Galaxy", value: "Guardians of the Galaxy" },
	{ label: "Harry Potter and the Sorcerer's Stone", value: "Harry Potter and the Sorcerer's Stone" },
	{ label: "Inception", value: "Inception" },
	{ label: "Inside Out", value: "Inside Out" },
	{ label: "Interstellar", value: "Interstellar" },
	{ label: "It", value: "It" },
	{ label: "Jaws", value: "Jaws" },
	{ label: "John Wick", value: "John Wick" },
	{ label: "Joker", value: "Joker" },
	{ label: "Jurassic Park", value: "Jurassic Park" },
	{ label: "Kill Bill: Vol. 1", value: "Kill Bill: Vol. 1" },
	{ label: "La La Land", value: "La La Land" },
	{ label: "Leon: The Professional", value: "Leon: The Professional" },
	{ label: "Logan", value: "Logan" },
	{ label: "Mad Max: Fury Road", value: "Mad Max: Fury Road" },
	{ label: "Memento", value: "Memento" },
	{ label: "Million Dollar Baby", value: "Million Dollar Baby" },
	{ label: "Parasite", value: "Parasite" },
	{ label: "Pirates of the Caribbean: The Curse of the Black Pearl", value: "Pirates of the Caribbean: The Curse of the Black Pearl" },
	{ label: "Pulp Fiction", value: "Pulp Fiction" },
	{ label: "Ratatouille", value: "Ratatouille" },
	{ label: "Schindler's List", value: "Schindler's List" },
	{ label: "Se7en", value: "Se7en" },
	{ label: "Seven Samurai", value: "Seven Samurai" },
	{ label: "Shutter Island", value: "Shutter Island" },
	{ label: "Spider-Man: Into the Spider-Verse", value: "Spider-Man: Into the Spider-Verse" },
	{ label: "Spirited Away", value: "Spirited Away" },
	{ label: "Star Wars: Episode IV - A New Hope", value: "Star Wars: Episode IV - A New Hope" },
	{ label: "Star Wars: Episode V - The Empire Strikes Back", value: "Star Wars: Episode V - The Empire Strikes Back" },
	{ label: "The Avengers", value: "The Avengers" },
	{ label: "The Big Lebowski", value: "The Big Lebowski" },
	{ label: "The Dark Knight", value: "The Dark Knight" },
	{ label: "The Departed", value: "The Departed" },
	{ label: "The Godfather", value: "The Godfather" },
	{ label: "The Godfather Part II", value: "The Godfather Part II" },
	{ label: "The Grand Budapest Hotel", value: "The Grand Budapest Hotel" },
	{ label: "The Great Gatsby", value: "The Great Gatsby" },
	{ label: "The Hobbit", value: "The Hobbit" },
	{ label: "The Lion King", value: "The Lion King" },
	{ label: "The Lord of the Rings: The Fellowship of the Ring", value: "The Lord of the Rings: The Fellowship of the Ring" },
	{ label: "The Lord of the Rings: The Return of the King", value: "The Lord of the Rings: The Return of the King" },
	{ label: "The Lord of the Rings: The Two Towers", value: "The Lord of the Rings: The Two Towers" },
	{ label: "The Matrix", value: "The Matrix" },
	{ label: "The Prestige", value: "The Prestige" },
	{ label: "The Shawshank Redemption", value: "The Shawshank Redemption" },
	{ label: "The Silence of the Lambs", value: "The Silence of the Lambs" },
	{ label: "The Social Network", value: "The Social Network" },
	{ label: "The Wolf of Wall Street", value: "The Wolf of Wall Street" },
	{ label: "There Will Be Blood", value: "There Will Be Blood" },
	{ label: "Titanic", value: "Titanic" },
	{ label: "Toy Story", value: "Toy Story" },
	{ label: "Up", value: "Up" },
	{ label: "WALL-E", value: "WALL-E" },
	{ label: "Whiplash", value: "Whiplash" },
	{ label: "Wonder Woman", value: "Wonder Woman" },
	{ label: "Zootopia", value: "Zootopia" },
];

// Fake API call
// Must return array of Option
const fetchData = async (query: string) => {
	await new Promise((resolve) => setTimeout(resolve, 600));
	const filteredOptions = options.filter((opt) => opt.value.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()));
	return filteredOptions;
};

export default function AutocompleteDemo() {
	const [autocompleteVal, setAutocompleteVal] = useState("");
	const handleOptionSelect = (value: string, optionValue: Option) => {
		console.log({ value, optionValue });
		setAutocompleteVal(value);
	};

	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Autocomplete</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-x-2.5 gap-y-4 w-[300px] mx-auto">
				<Autocomplete label="Default Autocomplete" value={autocompleteVal} onOptionSelect={handleOptionSelect} options={options} />
				<Autocomplete
					label="Customized Option Label"
					options={options.map((v) => ({
						...v,
						label: (
							<span className="flex">
								<SmileIcon className="mr-1.5" /> {v.label}
							</span>
						),
					}))}
				/>
				<Autocomplete label="Creatable Autocomplete" options={options} creatable />
				<Autocomplete label="Async Autocomplete" options={options} asynFilterFunction={fetchData} />
				<Autocomplete label="Disabled" disabled options={options} />
				<div>
					<Autocomplete
						className="w-full"
						label="Autocomplete With Error"
						error
						value={autocompleteVal}
						onOptionSelect={handleOptionSelect}
						options={options}
					/>
					<p className="text-xs leading-tight text-error">Something went wrong!</p>
				</div>
			</CardContent>
		</Card>
	);
}
