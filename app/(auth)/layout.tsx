import '../globals.css';
import { Toaster } from "@/components/ui/toaster"
export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">

            <body >
                {children}
                <Toaster/>
            </body>
        </html>
    );
}
