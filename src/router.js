import Index from './components/Index.vue';
import ModeA from './components/ModeA.vue';

const routes = [
    {
        path: '/',
        components: {
            default: Index,
        },
    },{
        path: '/modea',
        components: {
            default: ModeA,
        }
    }
];

export default routes