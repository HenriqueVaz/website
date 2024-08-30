import { createRouter, createWebHistory } from "vue-router";
import MusicView from "../views/MusicView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ResumeView from "../views/ResumeView.vue";
import TravelView from "../views/TravelView.vue";
import BlogView from "../views/BlogView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "resume",
            component: ResumeView
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectsView
        },
        {
            path: "/music",
            name: "music",
            component: MusicView
        },
        {
            path: "/travel",
            name: "travel",
            component: TravelView
        },
        {
            path: "/blog",
            name: "blog",
            component: BlogView
        }
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (About.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import('../views/AboutView.vue')
        // }
    ]
});

export default router;
