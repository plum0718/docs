/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
	yeecordSidebar: [
		'intro',
		'migrate-to-v4',
		{
			type: 'category',
			label: '指令',
			items: [
				'commands/howto',
				'commands/list',
				{
					type: 'category',
					label: '指令參照',
					items: [
						'commands/reference/general'
					]
				}
			]
		},
		{
			type: 'category',
			label: "RPG系統全攻略",
			items: [
				'rpg/index',
				'rpg/jobs',
				'rpg/shop'
			]
		},
		'chat',
		'dvc',
		'ticket',
		'faq',
		'credit'
	]
};
