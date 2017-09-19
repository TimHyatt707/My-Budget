import React from 'react';
import IndexPageLayout from './IndexPageLayout';
import NavbarComponent from './NavbarComponent';
import BudgetPreviewComponent from './BudgetPreviewComponent';
import TransactionPreviewComponent from './TransactionPreviewComponent';
import FooterComponent from './FooterComponent';

export default function IndexPage({
  pageTitle,
  pages,
  chartData,
  transactions
}) {
  return (
    <IndexPageLayout>
      <NavbarComponent pageTitle={pageTitle} pages={pages} />
      <BudgetPreviewComponent chartData={chartData} />
      <TransactionPreviewComponent transactions={transactions} />
      <FooterComponent pageTitle={pageTitle} />
    </IndexPageLayout>
  );
}
