"use client";
import { useCallback } from "react";
import { Controller, type FieldValues, useFormContext, type FieldPath } from "react-hook-form";
import { Upload } from "@/components/ui/upload/upload";
import type { FileWithPathAndPreview } from "@/components/ui/upload/utils";
import { type FileWithPath } from "react-dropzone";

// ----------------------------------------------------------------------

type MultipleUploadProps<TFieldValues extends FieldValues> = Omit<React.ComponentPropsWithoutRef<typeof Upload>, "file" | "files" | "onDrop"> &
	Omit<React.ComponentPropsWithoutRef<typeof Controller>, "name" | "control" | "render"> & {
		name: FieldPath<TFieldValues>;
		onDrop?: (file: FileWithPath[]) => void;
		onRemoveAll?: () => void;
		onRemove?: (file: FileWithPathAndPreview | string, index: number) => void;
	};

export function RHFUploadMultiple<TFieldValues extends FieldValues>({
	name,
	defaultValue,
	rules,
	onDrop,
	onRemove,
	onRemoveAll,
	helperText,
	...other
}: MultipleUploadProps<TFieldValues>) {
	const { control, setValue, getValues } = useFormContext();

	const handleDrop = useCallback(
		(acceptedFiles: FileWithPath[]) => {
			const files = acceptedFiles.map((f) =>
				Object.assign(f, {
					preview: URL.createObjectURL(f),
				}),
			);
			setValue(name, files as any);
		},
		[name, setValue],
	);

	const handleRemove = useCallback(
		(_file: FileWithPathAndPreview | string, index: number) => {
			const values = getValues(name);
			if (!!values && Array.isArray(values)) {
				const newValues = values.toSpliced(index, 1);
				setValue(name, newValues);
			}
		},
		[setValue, name, getValues],
	);

	const handleRemoveAll = useCallback(() => {
		setValue(name, [] as any);
	}, [setValue, name]);

	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			rules={rules}
			render={({ field, fieldState: { error } }) => {
				return (
					<Upload
						multiple
						files={field.value}
						helperText={
							(!!error || !!helperText) && (
								<div className="mt-4 space-y-3">
									{!!helperText && <p className="text-sm leading-none text-muted-foreground ml-1.5 mt-2">{helperText}</p>}
									{!!error && <p className="text-sm leading-none text-error ml-1.5 mt-2">{error?.message}</p>}
								</div>
							)
						}
						onDrop={onDrop ?? handleDrop}
						onRemove={onRemove ?? handleRemove}
						onRemoveAll={onRemoveAll ?? handleRemoveAll}
						{...other}
					/>
				);
			}}
		/>
	);
}
