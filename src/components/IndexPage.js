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
  transactions,
  categories
}) {
  return (
    <IndexPageLayout>
      <NavbarComponent pageTitle={pageTitle} pages={pages} />
      <BudgetPreviewComponent categories={categories} />
      <TransactionPreviewComponent transactions={transactions} />
      <FooterComponent pageTitle={pageTitle} />
    </IndexPageLayout>
  );
}
