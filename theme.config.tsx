import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
	logo: <span>Sidekick</span>,
	project: {
		link: "https://github.com/karimsa/sidekick",
	},
	docsRepositoryBase: "https://github.com/karimsa/sidekick",
	footer: {
		text: "Copyright © 2021-present Karim Alibhai",
	},
	useNextSeoProps() {
		return {
			titleTemplate: "%s - Sidekick",
		};
	},
	navbar: {
		extraContent: (
			<>
				<a href={"https://npmjs.org/@karimsa/sidekick"}>
					<img
						src={
							"https://img.shields.io/npm/v/@karimsa/sidekick?label=latest&color=green"
						}
						alt="latest npm version"
					/>
				</a>
			</>
		),
	},
};

export default config;
