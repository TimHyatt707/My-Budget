import React from 'react';
import BudgetPageLayout from './BudgetPageLayout';
import NavbarComponent from './NavbarComponent';
import PieChartComponent from './PieChartComponent';
import BudgetDisplayComponent from './BudgetDisplayComponent';
import ActionBarBudgetComponent from './ActionBarCategoryComponent';
import BudgetingTableComponent from './BudgetingTableComponent';
import FooterComponent from './FooterComponent';

export default function BudgetPage({
  pageTitle,
  pages,
  chartData,
  totalSpent,
  totalLimit,
  categories,
  onOpenCreateCategoryDialog,
  onShowCreateCategoryDialog,
  onCloseCreateCategoryDialog,
  onSubmitCategory
}) {
  return (
    <BudgetPageLayout>
      <NavbarComponent pageTitle={pageTitle} pages={pages} />
      <PieChartComponent chartData={chartData} />
      <BudgetDisplayComponent totalSpent={totalSpent} totalLimit={totalLimit} />
      <ActionBarBudgetComponent
        onOpenCreateCategoryDialog={onOpenCreateCategoryDialog}
        onShowCreateCategoryDialog={onShowCreateCategoryDialog}
        onCloseCreateCategoryDialog={onCloseCreateCategoryDialog}
        onSubmitCategory={onSubmitCategory}
      />
      <BudgetingTableComponent categories={categories} />
      <FooterComponent pageTitle={pageTitle} />
    </BudgetPageLayout>
  );
}
