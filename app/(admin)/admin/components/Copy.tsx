'use client';

import toast from 'react-hot-toast';
import { Copy } from "lucide-react";

interface CopySetProps {
    data: string | null | undefined;
  }

const CopySet: React.FC<CopySetProps> = ({ data }) => {

    const onCopy = (data: any) => {
        navigator.clipboard.writeText(data);
        toast.success('Copied to clipboard.');
      }
  return (
    <button onClick={() => onCopy(data)}>
          <Copy className="h-4 w-4" />
    </button>
  )
}

export default CopySet