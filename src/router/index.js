import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChatRoom from "../views/ChatRoom.vue";
import { auth } from "@/firebase/config";

const authControl = (to, from, next) => {
  const user = auth.currentUser;
  if (!user) {
    next({ name: "home" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/chatroom",
    name: "ChatRoom",
    component: ChatRoom,
    beforeEnter: authControl,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
