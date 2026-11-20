import { useParams } from "react-router";
import { establishmentNav } from "@/libs/navigation";
import DashboardLayout from "@components/layout/DashboardLayout";

/**
 * @returns le dashboard de /e/:slug
 */
const EstablishmentLayout = () => {
    const { slug } = useParams<{ slug: string }>(); // establishement ID

    return (
        <DashboardLayout
            groups={establishmentNav}
            basePath={`/e/${slug}`}
            title={slug?.replaceAll("-", " ") ?? ""}
            backLink={{ to: "/e", label: "Tous les établissements" }}
        />
    );
};

export default EstablishmentLayout;
