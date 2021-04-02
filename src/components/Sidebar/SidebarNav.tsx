import { Stack } from '@chakra-ui/react';
import { RiContactsLine, RiInputMethodLine, RiGitMergeLine, RiDashboardLine } from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink href="/users" icon={RiContactsLine}>Usuários</NavLink>
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink href="/dashboard" icon={RiInputMethodLine}>Formulários</NavLink>
        <NavLink href="/dashboard" icon={RiGitMergeLine}>Automação</NavLink>
      </NavSection>
    </Stack>
  )
}
