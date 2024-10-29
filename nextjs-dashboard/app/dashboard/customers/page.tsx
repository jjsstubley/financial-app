import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';

export const metadata: Metadata = {
    title: 'Customers',
};

export default async function Page() {

    // const customers = await fetchFilteredCustomers();

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
            </div>
             {/* <Suspense fallback={<InvoicesTableSkeleton />}>
                <Table customers={customers} />
            </Suspense> */}
        </div>
    );
}