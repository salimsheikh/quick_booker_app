import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',

                'resources/assets/vendors/mdi/css/materialdesignicons.min.css',
                'resources/assets/vendors/mdi/css/materialdesignicons.min.css.map',
                'resources/assets/vendors/css/vendor.bundle.base.css',
                'resources/assets/css/style.css',
                'resources/assets/images/favicon.png',
                
           


                
            ],
            refresh: true,
        }),
    ],
});
