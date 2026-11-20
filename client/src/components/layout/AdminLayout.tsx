import { adminNav } from '@libs/navigation';
import DashboardLayout from '@components/layout/DashboardLayout';

const AdminLayout = () => (
    <DashboardLayout
        groups={adminNav}
        basePath="/admin"
        title="Administration"
        backLink={{ to: "/", label: "Retour au site" }}
    />
);

export default AdminLayout;
