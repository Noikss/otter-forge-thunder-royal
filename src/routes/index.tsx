import { createFileRoute } from "@tanstack/react-router";
import { Storefront } from "@/store/Storefront";

export const Route = createFileRoute("/")({ component: Storefront });
