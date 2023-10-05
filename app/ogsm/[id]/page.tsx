import Card from "@/components/Card";

export default function Ogsm() {
  return (
    <div className="">
      <div className="mb-2">
        <Card>
          <div className="flex items-center gap-2">
            <h2 className="text-sm text-gray-600">Objective:</h2>
            <input
              type="text"
              className="w-full rounded border px-2 py-1 text-sm"
            />
          </div>
        </Card>
      </div>
      <div className="flex gap-2">
        <div className="w-80">
          <Card>
            <h2 className="text-sm text-gray-600">Goals:</h2>
            <ul className="ml-6 list-disc">
              <li>Random thing</li>
              <li>Other thing</li>
              <li>Cool thing</li>
            </ul>
          </Card>
        </div>
        <div className="flex grow flex-col gap-2">
          <Card>
            <div className="flex text-sm">
              <div className="grow border-r">
                <div className="">
                  <h3 className="">Lorem ipsum</h3>
                  <ul className="ml-6 list-disc">
                    <li>Random thing</li>
                    <li>Other thing</li>
                    <li>Cool thing</li>
                  </ul>
                </div>
              </div>
              <div className="grow border-r">
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, reprehenderit?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, reprehenderit?
                  </li>
                </ul>
              </div>
              <div className="grow">
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, reprehenderit?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, reprehenderit?
                  </li>
                </ul>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex text-sm">
              <div className="grow border-r">
                <div className="">
                  <h3 className="">Lorem ipsum</h3>
                  <ul className="ml-6 list-disc">
                    <li>Random thing</li>
                    <li>Other thing</li>
                    <li>Cool thing</li>
                  </ul>
                </div>
              </div>
              <div className="grow border-r">
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, reprehenderit?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, reprehenderit?
                  </li>
                </ul>
              </div>
              <div className="grow">
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, reprehenderit?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, reprehenderit?
                  </li>
                </ul>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex text-sm">
              <div className="grow border-r">
                <div className="">
                  <h3 className="">Lorem ipsum</h3>
                  <ul className="ml-6 list-disc">
                    <li>Random thing</li>
                    <li>Other thing</li>
                    <li>Cool thing</li>
                  </ul>
                </div>
              </div>
              <div className="grow border-r">
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, reprehenderit?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, reprehenderit?
                  </li>
                </ul>
              </div>
              <div className="grow">
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, reprehenderit?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, reprehenderit?
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
