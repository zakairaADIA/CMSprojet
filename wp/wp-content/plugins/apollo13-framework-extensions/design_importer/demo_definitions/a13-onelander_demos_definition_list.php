<?php
/**
 * name - just a name to display on bottom title bar in single importer item
 * id - used to identify the folder (in fatmoon/demo_data/ ) with content to import
 * revo - array of sliders to import, each array item corresponds to file *.zip in folder fatmoon/demo_data/revo
 * categories - array of categories, used to display categories filter (always visible)
 * tags - array of tags, used to display in tags filter (initially hidden)  and in single item hover window
 * demo_url - an url that leads to particular demo site
 * background - allows to set background color of title bar of single importer item
 * font_color - allows to set font color of title bar of single importer item
 */

$demos[] = array(
	'name'       => 'OneLander 1',
	'id'         => 'demo1',
	'revo'       => array('landing', 'landing-page-2'),
	'categories' => array(),
	'tags'       => array(),
	'demo_url'   => 'https://rifetheme.com/onelander/',
	'background' => 'rgba(0,0,0,0.5)',
	'font_color' => '#ffffff'
);
$demos[] = array(
	'name'       => 'OneLander 2',
	'id'         => 'demo2',
	'revo'       => array('landing', 'landing-page-2'),
	'categories' => array(),
	'tags'       => array(),
	'demo_url'   => 'https://rifetheme.com/onelander-2/',
	'background' => 'rgba(0,0,0,0.5)',
	'font_color' => '#ffffff'
);
$demos[] = array(
	'name'       => 'OneLander 3',
	'id'         => 'demo3',
	'revo'       => array('landing', 'landing-page-2', 'landing-page-3'),
	'categories' => array(),
	'tags'       => array(),
	'demo_url'   => 'https://rifetheme.com/onelander-3/',
	'background' => 'rgba(0,0,0,0.5)',
	'font_color' => '#ffffff'
);


$plugins = array(
	array(
		'name'    => 'Elementor',
		'slug'    => 'elementor',
		'version' => '1.8.10',
	),
	array(
		'name'    => 'Apollo13 Framework Extensions',
		'slug'    => 'apollo13-framework-extensions',
		'version' => '1.2.0',
	),
	array(
		'name'    => 'WPForms Lite',
		'slug'    => 'wpforms-lite',
		'version' => '1.4.2',
	),
);


$data = array(
	'demos' => $demos,
	'plugins' => $plugins
);

return $data;
