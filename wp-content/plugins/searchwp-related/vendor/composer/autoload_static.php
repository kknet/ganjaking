<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit37c058a00e3f767f70f9f9a27f46fa9d
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'SearchWP_Related\\' => 17,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'SearchWP_Related\\' => 
        array (
            0 => __DIR__ . '/../..' . '/includes',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit37c058a00e3f767f70f9f9a27f46fa9d::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit37c058a00e3f767f70f9f9a27f46fa9d::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}