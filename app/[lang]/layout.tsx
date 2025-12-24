import { locales } from "@/i18n";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export default function LangLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
