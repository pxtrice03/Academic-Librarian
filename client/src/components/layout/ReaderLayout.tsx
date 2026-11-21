import { readerNav } from "@libs/navigation";
import useAuthStore from "@store/useAuthStore";
import DashboardLayout from "@components/layout/DashboardLayout";

/**
 * Reader space : common configure for the dashboard with the reader's menu
 * @returns the dashboard for personal space /s
 */
const ReaderLayout = () => {
    const user = useAuthStore((s) => s.user);

    return (
        <DashboardLayout
            groups={readerNav}
            basePath="/s"
            title={user?.name ?? "Lecteur"}
            backLink={{ to: "/", label: "Retour au site" }}
        />
    );
};

export default ReaderLayout;
