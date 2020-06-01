import React from "react";

export default function SearchForm({ setSearchTerm }) {
	const searchValue = React.useRef("");

	React.useEffect(() => {
		searchValue.current.focus();
	}, []);

	const handleSubmit = (e) => {
		e.preventDeafault();
	};

	const searchCocktail = () => {
		setSearchTerm(searchValue.current.value);
	};
	return (
		<section className="section">
			<h2 className="section-title"> search cocktails</h2>
			<form className="form seacrh-form" onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="name">search your fav cocktail</label>
					<input
						type="text"
						name="name"
						id="name"
						onChange={searchCocktail}
						ref={searchValue}
					></input>
				</div>
			</form>
		</section>
	);
}
