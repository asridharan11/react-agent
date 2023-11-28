import { Loader2, Mail } from 'lucide-react';
import { Button } from '../../../components/ui/button';

export function ButtonDemo() {
  return (
    <div>
      <Button>Button</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
    </div>
  );
}
