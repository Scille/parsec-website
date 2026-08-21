// Raw content of every file under src/content/download
// decompose the filename with the name and the lang (file extension)
export const codeFiles: Record<string, { code: string; lang: string }> =
  Object.fromEntries(
    Object.entries(
      import.meta.glob<string>("/src/content/download/*.*", {
        query: "?raw",
        import: "default",
        eager: true,
      }),
    ).map(([path, code]) => {
      const fileName = path.split("/").pop() ?? "";
      const [name, lang] = [
        fileName.slice(0, fileName.lastIndexOf(".")),
        fileName.slice(fileName.lastIndexOf(".") + 1),
      ];
      return [name, { code, lang }];
    }),
  );
