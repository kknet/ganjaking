<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit13164575ba806bb070185b30616969d4
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'Wamania\\Snowball\\' => 17,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Wamania\\Snowball\\' => 
        array (
            0 => __DIR__ . '/..' . '/wamania/php-stemmer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit13164575ba806bb070185b30616969d4::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit13164575ba806bb070185b30616969d4::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}