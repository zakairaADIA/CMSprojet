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
	'name'       => 'Starter 1',
	'id'         => 'demo1',
	'revo'       => array(
		'starter',
		'starter2',
		'starter3',
		'starter4',
		'starter5',
		'starter6'
	),
	'categories' => array( 'One Page' ),
	'tags'       => array(),
	'demo_url'   => 'https://rifetheme.com/starter/',
	'background' => 'rgba(0,0,0,0.5)',
	'font_color' => '#ffffff'
);

$demos[] = array(
	'name'       => 'Starter 2',
	'id'         => 'demo2',
	'revo'       => array(
		'starter',
		'starter2',
		'starter3',
		'starter4',
		'starter5',
		'starter6'
	),
	'categories' => array( 'One Page' ),
	'tags'       => array(),
	'demo_url'   => 'https://rifetheme.com/starter-2/',
	'background' => 'rgba(0,0,0,0.5)',
	'font_color' => '#ffffff'
);

$demos[] = array(
	'name'       => 'Starter 3',
	'id'         => 'demo3',
	'revo'       => array(
		'starter',
		'starter2',
		'starter3',
		'starter4',
		'starter5',
		'starter6'
	),
	'categories' => array( 'One Page' ),
	'tags'       => array(),
	'demo_url'   => 'https://rifetheme.com/starter-3/',
	'background' => 'rgba(0,0,0,0.5)',
	'font_color' => '#ffffff'
);

$demos[] = array(
	'name'       => 'Starter 4',
	'id'         => 'demo4',
	'revo'       => array(
		'starter',
		'starter2',
		'starter3',
		'starter4',
		'starter5',
		'starter6'
	),
	'categories' => array( 'One Page' ),
	'tags'       => array(),
	'demo_url'   => 'https://rifetheme.com/starter-4/',
	'background' => 'rgba(0,0,0,0.5)',
	'font_color' => '#ffffff'
);

$demos[] = array(
	'name'       => 'Starter 5',
	'id'         => 'demo5',
	'revo'       => array(
		'starter',
		'starter2',
		'starter3',
		'starter4',
		'starter5',
		'starter6'
	),
	'categories' => array( 'One Page' ),
	'tags'       => array(),
	'demo_url'   => 'https://rifetheme.com/starter-5/',
	'background' => 'rgba(0,0,0,0.5)',
	'font_color' => '#ffffff'
);


$plugins = array(
	array(
		'name'    => 'WPBakery Visual Composer',
		'slug'    => 'js_composer',
		'source'  => 'http://rifetheme.com/wp-content/themes/starter/advance/plugins/js_composer.zip',
		'version' => '5.0.1',
	),
	array(
		'name'    => 'Apollo13 Framework Extensions',
		'slug'    => 'apollo13-framework-extensions',
		'version' => '1.2.0',
	),
	array(
		'name'    => 'Slider Revolution',
		'slug'    => 'revslider',
		'source'  => 'http://rifetheme.com/wp-content/themes/starter/advance/plugins/revslider.zip',
		'version' => '5.3.1.5',
	),
	array(
		'name'    => 'LivIcons Evolution',
		'slug'    => 'livicons-evolution',
		'source'  => 'http://rifetheme.com/wp-content/themes/starter/advance/plugins/livicons-evolution.zip',
		'version' => '2.1.361',
	),
	array(
		'name'    => 'Contact Form 7',
		'slug'    => 'contact-form-7',
		'version' => '4.5.1',
	),
	array(
		'name'    => 'Featured Galleries',
		'slug'    => 'featured-galleries',
		'version' => '1.7.0'
	),
	array(
		'name'    => 'WP Google Maps',
		'slug'    => 'wp-google-maps',
		'version' => '6.3.13'
	),
	array(
		'name'    => 'MailChimp for WordPress',
		'slug'    => 'mailchimp-for-wp',
		'version' => '4.0.13'
	),
);


$data = array(
	'demos' => $demos,
	'plugins' => $plugins
);

return $data;
