import { FileRoute } from '@tanstack/react-router';

export const Route = new FileRoute('/panel/employee').createRoute({
  component: PanelEmployeeRoute,
});

function PanelEmployeeRoute() {
  return <div>Panel employee route</div>;
}
