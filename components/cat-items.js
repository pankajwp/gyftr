const MenuItems = (props) => {
	let listCat = props.catListProp.map((cat) => {
		const brandSlugs = cat.brands_slug.split(",");
		return (
			<li
				className={brandSlugs.length > 4 ? `dropdown spriteMenu` : `dropdown`}
				key={cat.name}
			>
				<a
					href="#"
					className="dropdown-toggle"
					id={`${cat.slug}-Dropdown`}
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					<figure>
						<img src={cat.icon_url} alt={cat.name} />
						<figcaption>{cat.name}</figcaption>
					</figure>
				</a>
				<div className="dropdown-menu" aria-labelledby={`${cat.slug}-Dropdown`}>
					{cat.brands_name.split(",").map(function(subitem, index) {
						return (
							<a
								key={subitem}
								className="dropdown-item"
								href={brandSlugs[index]}
							>
								{subitem}
							</a>
						);
					})}
				</div>
			</li>
		);
	});

	return <>{listCat}</>;
};

export default MenuItems;
