cmd_Makefile := cd ..; /Users/eabp/.nvm/versions/node/v16.18.1/lib/node_modules/node-gyp/gyp/gyp_main.py -fmake --ignore-environment "-Dlibrary=shared_library" "-Dvisibility=default" "-Dnode_root_dir=/Users/eabp/Library/Caches/node-gyp/16.18.1" "-Dnode_gyp_dir=/Users/eabp/.nvm/versions/node/v16.18.1/lib/node_modules/node-gyp" "-Dnode_lib_file=/Users/eabp/Library/Caches/node-gyp/16.18.1/<(target_arch)/node.lib" "-Dmodule_root_dir=/Users/eabp/Proyectos/cursos/node/nodejs-practices/nativos" "-Dnode_engine=v8" "--depth=." "-Goutput_dir=." "--generator-output=build" -I/Users/eabp/Proyectos/cursos/node/nodejs-practices/nativos/build/config.gypi -I/Users/eabp/.nvm/versions/node/v16.18.1/lib/node_modules/node-gyp/addon.gypi -I/Users/eabp/Library/Caches/node-gyp/16.18.1/include/node/common.gypi "--toplevel-dir=." binding.gyp