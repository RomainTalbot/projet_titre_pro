<?php

/**
* Plugin Name: SpinningSquidPlugin
*/

require __DIR__ . '/vendor-spinningsquid/autoload.php';

use SpinningSquid\Plugin;
use SpinningSquid\API;

$spinningsquid= new Plugin;

$api = new API;

register_activation_hook(__FILE__, [$spinningsquid, 'activate']);
register_deactivation_hook(__FILE__, [$spinningsquid, 'deactivate']);