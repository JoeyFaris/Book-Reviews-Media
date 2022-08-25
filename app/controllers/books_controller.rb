class BooksController < ApplicationController
    
    def index
        books = Book.all
        render json: books
    end

    def create
        book = Book.create!(book_params)
        render json: book, status: :created
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

    def book_params
        params.permit(:title, :author, :description, :amazon_url, :img_url)
    end
end
