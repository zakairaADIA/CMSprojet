<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'supernovashop' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'I?Pf)k3ZBJmThChTgTM26E%Q-;^HIaua+-_fT]>3?eH_>tabxNvw<%%G4XFLf0<p' );
define( 'SECURE_AUTH_KEY',  'zpf;[p5G%Hm>!=1S`K-9J[(ZmTt$GRx3N,q{qsAL`MybPW|9R}zvSCv<m?f7zrT-' );
define( 'LOGGED_IN_KEY',    's]/UvI4g?mhPaA~L%k0/4k(kyx5])f.cMG*!|R7obQKQ1SXvA<A&H%v&g9g<kQM3' );
define( 'NONCE_KEY',        'B8/5i)Ld>gD59xxE?_uBV]Q]|={k7T.scGD RSK`QC]rivAqyqq*e&xuNw4BqW/c' );
define( 'AUTH_SALT',        'pG+G8L.8W)X&* qM=wF=xu>NEoVE;uV)X$m~Q:/Sw|F|d]r+cyD(_/*B]kHxDxbj' );
define( 'SECURE_AUTH_SALT', '!70e|;OA}w,S4J.t%6kyxY4Ad8)C.Wb:VEo!Ub,J{xLSbjf{Qb2V@WE`to2aFY6N' );
define( 'LOGGED_IN_SALT',   '9v6g0 YK-QuRm>]#+.g5=sIeLh{`J%:h+JK2++=g4B~Of@2al6trx!N%aZZmd&[g' );
define( 'NONCE_SALT',       '_lRn|Z$;{m=GAj,J+@zjk|;/T@an8.-q80--+>u!G&Cf6r!<)YvAWg6?@wWO`T~*' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



define( 'SURECART_ENCRYPTION_KEY', 's]/UvI4g?mhPaA~L%k0/4k(kyx5])f.cMG*!|R7obQKQ1SXvA<A&H%v&g9g<kQM3' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
