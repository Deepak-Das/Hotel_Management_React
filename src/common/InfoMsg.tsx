interface Props{
  alertTitle:string,
  alertInfo?:string
}


export function InfoMsg({alertTitle,alertInfo}:Props) {
  return <div className="tw-mb-4 tw-flex tw-items-center tw-rounded-lg tw-border tw-border-green-300 tw-bg-green-50 tw-p-4 tw-text-sm tw-text-green-800 dark:tw-border-green-800 dark:tw-bg-gray-800 dark:tw-text-green-400" role="alert">
        <svg className="me-3 tw-inline tw-h-4 tw-w-4 tw-flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="tw-sr-only">Info</span>
        <div>
          <span className="tw-ml-1 tw-font-medium">{alertTitle}</span> {alertInfo}
        </div>
      </div>;
}
  