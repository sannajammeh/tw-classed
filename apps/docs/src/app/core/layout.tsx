import { coreSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/core'>) {
  return (
    <DocsLayout tree={coreSource.getPageTree()} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
