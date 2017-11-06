import React from "react";
import BudgetPageLayout from "./BudgetPageLayout";
import NavbarComponent from "./NavbarComponent";
import PieChartComponent from "./PieChartComponent";
import ActionBarBudgetComponent from "./ActionBarCategoryComponent";
import BudgetingTableComponent from "./BudgetingTableComponent";

export default function BudgetPage({
  pageTitle,
  pages,
  totalSpent,
  totalLimit,
  categories,
  transactions,
  onOpenCreateCategoryDialog,
  onShowCreateCategoryDialog,
  onCloseCreateCategoryDialog,
  onOpenUpdateCategoryDialog,
  onCloseUpdateCategoryDialog,
  onShowUpdateCategoryDialog,
  onDeleteCategory,
  onSubmitUpdate,
  onSubmitCategory,
  onSelectCategory,
  onDeselectCategory,
  selectedCategoryIds,
  onUpdateCategory,
  onSortCategoryName,
  currentSort,
  budgetDisplayData,
  sendBudgetDisplayData,
  authenticatedUserId,
  token,
  onLogoutUser,
  history
}) {
  if (transactions === "Failed to fetch" || categories === "Failed to fetch")
    return <h1>Internal Server Error</h1>;
  else
    return (
      <BudgetPageLayout>
        <NavbarComponent
          pageTitle={pageTitle}
          pages={pages}
          token={token}
          onLogoutUser={onLogoutUser}
          history={history}
        />
        <PieChartComponent categories={categories} width={1000} />
        <ActionBarBudgetComponent
          authenticatedUserId={authenticatedUserId}
          token={token}
          onOpenCreateCategoryDialog={onOpenCreateCategoryDialog}
          onShowCreateCategoryDialog={onShowCreateCategoryDialog}
          onCloseCreateCategoryDialog={onCloseCreateCategoryDialog}
          onSubmitCategory={onSubmitCategory}
          onOpenUpdateCategoryDialog={onOpenUpdateCategoryDialog}
          onCloseUpdateCategoryDialog={onCloseUpdateCategoryDialog}
          onShowUpdateCategoryDialog={onShowUpdateCategoryDialog}
          onUpdateCategory={onUpdateCategory}
          selectedCategoryIds={selectedCategoryIds}
          onDeleteCategory={onDeleteCategory}
          onSortCategoryName={onSortCategoryName}
        />
        <BudgetingTableComponent
          categories={categories}
          transactions={transactions}
          currentSort={currentSort}
          onSelectCategory={onSelectCategory}
          onDeselectCategory={onDeselectCategory}
          selectedCategoryIds={selectedCategoryIds}
        />
      </BudgetPageLayout>
    );
}
