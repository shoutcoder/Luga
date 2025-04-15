const ConfirmDeleteModal = ({
    open,
    title ="Delete",
    message = "Are you sure,want to delete this",
    onClose,
    onConfirm
}: {
    open: boolean;
    title: string;
    message: string;
    onClose: () => void;
    onConfirm: () => void;
}) => {
    if (!open) return null; // If the modal is not open, return null

    return (
        <div className="fixed text-black inset-0 bg-black/50 flex items-center justify-center z-[999]">
            <div className="bg-white p-6 rounded-xl w-full max-w-sm shadow-xl space-y-4 text-center">
                <h2 className="text-lg font-bold">{title}</h2>
                <p>{message}</p>
                <div className="flex justify-center gap-4 pt-4">
                    <button
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                        onClick={onConfirm}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDeleteModal;

