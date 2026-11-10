import Mascot from "@components/Mascot";
import { APP_NAME } from "@libs/constants";

type FooterProps = { mascot?: Mascot };

const Footer = ({ mascot }: FooterProps) => (
    // relative: reference for the absolutely positioned mascot
    <footer className="relative border-t border-line py-8 text-center text-sm text-muted-foreground">
        {/* -top-18 lifts the mascot so its feet rest on the border line */}
        {mascot ? (
            <Mascot pose="wave" className="absolute -top-18 left-1/2 w-20 -translate-x-1/2" />
        ) : (
            ""
        )}
        &copy; {new Date().getFullYear()} {APP_NAME} · Made with ♥️ by <a href="https://github.com/pxtrice03" className="underline transition-colors duration-500 hover:text-accent">@pxtrice03</a>
    </footer>
);

export default Footer;
