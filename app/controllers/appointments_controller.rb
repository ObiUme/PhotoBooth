class AppointmentsController < ApplicationController

    def create
        appointment = Appointment.create!(appointment_params)
        render json: appointment, status: :created
    end

    def update
        appointment = Appointment.find(params[:id])
        appointment.update!(appointment_params)
        render json: appointment, status: :accepted
    end

    def destroy
        appointment = Appointment.find(params[:id])
        appointment.destroy
        head :no_content 
    end

    private

    def appointment_params
        params.permit(:shoot, :length, :price, :user_id)
    end
end
