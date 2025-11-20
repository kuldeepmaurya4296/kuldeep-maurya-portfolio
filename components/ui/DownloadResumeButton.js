import Link from 'next/link';

export default function DownloadResumeButton(file) {
    return (
        <Link href={file.file} target="_blank" download className='flex items-center justify-center px-4 lg:pt-10'>
            <button
                className="w-full cursor-pointer sm:w-auto border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary/10 transition text-sm sm:text-base"
            >
                Download Resume
            </button>
        </Link>
    );
}
