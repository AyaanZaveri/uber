"use client";

import Sidebar from "@/components/Sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import formSubmit from "@/lib/formSubmit";


// help page
export default function Page() {
  return (
    <main>
      <div className="">
        <h1 className="">Spotted a Bug?</h1>
      </div>
      <div className="">
        <form className="">
          <Input placeholder="Name" className="" />
          <Input placeholder="Email..." className="" />
          <Input placeholder="What's the issue?" className="" />
          <Button className="" onClick={formSubmit}>
            Submit
          </Button>
        </form>
      </div>
    </main>
  );
}
