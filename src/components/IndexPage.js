import React from 'react';
import IndexPageLayout from './IndexPageLayout';
import NavbarComponent from './NavbarComponent';
import PieChartComponent from './PieChartComponent';
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
      {/* <BudgetPreviewComponent categories={categories} /> */}
      <PieChartComponent categories={categories} width={500} />
      <TransactionPreviewComponent transactions={transactions} />
      <FooterComponent pageTitle={pageTitle} />
    </IndexPageLayout>
  );
}
