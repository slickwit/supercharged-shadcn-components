"use client";
import { useCallback } from "react";
import { FieldPath, Controller, FieldValues, useFormContext } from "react-hook-form";
import { Upload } from "@/components/ui/upload/upload";
import type { FileWithPathAndPreview } from "@/components/ui/upload/utils";
import { type FileWithPath } from "react-dropzone";

// ----------------------------------------------------------------------

type SingleUploadProps<TFieldValues extends FieldValues> = Omit<
	React.ComponentPropsWithoutRef<typeof Upload>,
	"file" | "files" | "onRemove" | "onRemoveAll" | "onUpload" | "onDrop"
> &
	Omit<React.ComponentPropsWithoutRef<typeof Controller>, "name" | "control" | "render"> & {
		name: FieldPath<TFieldValues>;
		onDrop?: (file: FileWithPathAndPreview) => void;
		onDelete?: (name: FieldPath<TFieldValues>) => void;
		deletable?: boolean;
	};

export function RHFUpload<TFieldValues extends FieldValues>({
	name,
	defaultValue,
	rules,
	deletable = false,
	onDelete,
	onDrop,
	helperText,
	...other
}: SingleUploadProps<TFieldValues>) {
	const { control, setValue } = useFormContext();

	const handleDrop = useCallback(
		(acceptedFiles: FileWithPath[]) => {
			if (acceptedFiles.length === 1) {
				const file = Object.assign(acceptedFiles[0], {
					preview: URL.createObjectURL(acceptedFiles[0]),
				});
				setValue(name, file as any);
				if (!!onDrop) {
					onDrop(file);
				}
			}
		},
		[onDrop, name, setValue],
	);

	const handleDelete = useCallback(() => {
		setValue(name, defaultValue);
		if (!!onDelete) {
			onDelete(name);
		}
	}, [setValue, name, onDelete, defaultValue]);

	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			rules={rules}
			render={({ field, fieldState: { error } }) => (
				<Upload
					multiple={false}
					file={field.value}
					error={!!error}
					helperText={
						(!!error || !!helperText) && (
							<div className="mt-4 space-y-3">
								{!!helperText && <p className="text-sm leading-none text-muted-foreground ml-1.5 mt-2">{helperText}</p>}
								{!!error && <p className="text-sm leading-none text-error ml-1.5 mt-2">{error?.message}</p>}
							</div>
						)
					}
					onDrop={handleDrop}
					onDelete={!!deletable || !!onDelete ? handleDelete : undefined}
					{...other}
				/>
			)}
		/>
	);
}
