import { APP_NAME } from '@libs/constants';

const Footer = () => (
    <footer className="bg-sec border-t border-line py-2 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} {APP_NAME} : "Je gere 😉". Made with ♥️ by <a href="https://github.com/pxtrice03" className="decoration-underline transition-colors durantion-500 hover:text-accent" target="__blank">pxtrice03</a>
    </footer>
);

export default Footer;
