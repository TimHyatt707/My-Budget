import React from "react";
import TransactionPageLayout from "./TransactionPageLayout";
import NavbarComponent from "./NavbarComponent";
import ActionBarTransactionComponent from "./ActionBarTransactionComponent";
import TransactionTableComponent from "./TransactionTableComponent";
import FooterComponent from "./FooterComponent";

export default function TransactionPage({
  pageTitle,
  pages,
  transactions,
  selectedTransactionIds,
  categories,
  onShowCreateTransactionDialog,
  onOpenCreateTransactionDialog,
  onCloseCreateTransactionDialog,
  onSubmitTransaction,
  onSelectTransaction,
  onDeselectTransaction,
  onShowUpdateTransactionDialog,
  onCloseUpdateTransactionDialog,
  onOpenUpdateTransactionDialog,
  onUpdateTransaction,
  onDeleteTransaction,
  token,
  authenticatedUserId,
  onLogoutUser
}) {
  return (
    <TransactionPageLayout>
      <NavbarComponent
        pageTitle={pageTitle}
        pages={pages}
        token={token}
        onLogoutUser={onLogoutUser}
      />
      <ActionBarTransactionComponent
        categories={categories}
        token={token}
        authenticatedUserId={authenticatedUserId}
        transactions={transactions}
        onSelectTransaction={onSelectTransaction}
        onShowCreateTransactionDialog={onShowCreateTransactionDialog}
        onCloseCreateTransactionDialog={onCloseCreateTransactionDialog}
        onOpenCreateTransactionDialog={onOpenCreateTransactionDialog}
        onSubmitTransaction={onSubmitTransaction}
        onShowUpdateTransactionDialog={onShowUpdateTransactionDialog}
        onCloseUpdateTransactionDialog={onCloseUpdateTransactionDialog}
        onOpenUpdateTransactionDialog={onOpenUpdateTransactionDialog}
        onUpdateTransaction={onUpdateTransaction}
        selectedTransactionIds={selectedTransactionIds}
        onDeleteTransaction={onDeleteTransaction}
      />
      <TransactionTableComponent
        transactions={transactions}
        selectedTransactionIds={selectedTransactionIds}
        onSelectTransaction={onSelectTransaction}
        onDeselectTransaction={onDeselectTransaction}
      />
      <FooterComponent pageTitle={pageTitle} />
    </TransactionPageLayout>
  );
}
