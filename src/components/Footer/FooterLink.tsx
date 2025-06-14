import Link from "next/link";

const FooterLink = () => {
  return (
    <>
      <div className="fixed bottom-4 w-full border-t p-4">
        <div className="flex items-center justify-center text-lg">
          API-Link👉:
          <Link
            href="https://randomuser.me/api/1.4/"
            className="hover:underline"
          >
            https://randomuser.me/api/1.4
          </Link>
        </div>
        <div className="flex items-center justify-center text-lg">
          API-User👉:
          <Link href="https://randomuser.me/" className="hover:underline">
            https://randomuser.me
          </Link>
        </div>
      </div>
    </>
  );
};

export default FooterLink;
