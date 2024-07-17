export default function TextArea({
  id,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}) {
  return (
    <textarea
      rows={5}
      className="py-2.5 px-4 border-none focus:outline-none block w-full border-transparent rounded-lg dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400"
      {...{ id, value, onChange, placeholder }}
    ></textarea>
  );
}
