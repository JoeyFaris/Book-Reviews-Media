class BooksController < ApplicationController
    
    def index
        books = Book.all
        render json: books
    end
    
    def destroy
        book = Book.find_by(id: params[:id])
        if book 
            book.destroy
            head :no_content
        else
            render json: {error: "Bird not found"}, status: :not_found
        end
    end
end
