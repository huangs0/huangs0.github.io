import Markdown from "react-markdown"

export function ListPanel({ name, components }: { name: string, components: string[] }) {
  return (
    <div className="w-full">
      <div className="w-full mb-4">
        <h3 className="text-2xl font-bold w-full border-b-2 border-black pb-1">{name}</h3>
      </div>
      <ul className="mt-6 flex flex-col gap-2 list-disc list-inside">
        {components.map((item, idx) => (
          <li key={idx}>
            <Markdown
              components={{
                p: ({ ...props }) => <span className="max-w-prose" {...props} />,
                a: ({ ...props }) => <a className="underline text-blue-500" {...props} />
              }}
            >
              {item}
            </Markdown>
          </li>
        ))}
      </ul>
    </div>
  );
}