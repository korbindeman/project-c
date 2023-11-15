import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
type Props = {};

export default function page({}: Props) {
  return (
    <div className="grid place-content-center pt-16">
      <Card className="p-8">
        <CardHeader>
          <CardTitle className="text-lg">Log in</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Label className="block" htmlFor="emailinput">
              Email
              <Input className="mt-1" id="emailinput" type="email"></Input>
            </Label>
            <Label htmlFor="password" className="block">
              Password
              <Input className="mt-1" id="password" type="password"></Input>
            </Label>
            <Link className="block" href="/dashboard">
              <Button type="submit">Submit</Button>
            </Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
